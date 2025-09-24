'use client'
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function ClientPage(){
  const { code } = useParams();
  const [profile,setProfile]=useState(null);

  useEffect(()=>{
    (async()=>{
      const {data,error}=await supabase.from("profiles").select("*").eq("code",code).maybeSingle();
      if(!data){
        await supabase.from("profiles").insert({code,points:200});
        setProfile({code,points:200,tier:"Клиент"});
      } else {
        setProfile(data);
      }
    })();
  },[code]);

  if(!profile) return <div className="p-10 text-amber-100">Загрузка…</div>;

  return(<div className="min-h-screen p-10 text-amber-100">
    <h1 className="text-3xl text-amber-200">Личный кабинет</h1>
    <p className="mt-4">Ваш код: <span className="font-mono">{code}</span></p>
    <p className="mt-2">Статус: {profile.tier}</p>
    <p className="mt-2">Бонусы: {profile.points}</p>
  </div>)
}