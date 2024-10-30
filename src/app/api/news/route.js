import { NextResponse } from "next/server";

export async function GET(request) { 
    //Zadanie 1: Pobieramy z newsapi.org artykuły z dowolnej kategorii i wypisujemy je w konsoli

    const response = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API}&q=technology`);
    const data = await response.json();
    console.log(data);

    return NextResponse.json(data, { status: 200 }); 
};