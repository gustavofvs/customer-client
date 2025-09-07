"use client";
import * as React from "react";
import { useState } from 'react';
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function HeroSection() {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    return (
        <main>

            <div className="flex flex-row min-h-screen items-center justify-center px-8 md:px-16 ">
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <Badge variant="default" className="bg-green-500/20 text-green-700 w-fit">Customer messages</Badge>

                    <h1 className="text-4xl md:text-5xl font-extrabold max-w-md bg-gradient-to-r from-green-600 to-emerald-400 text-transparent bg-clip-text">Transforme clientes de uma vez em fãs para sempre.</h1>        
                    <p className="text-lg max-w-md">Envia mensagens inteligentes via WhatsApp para trazer seus clientes de volta à sua loja. De forma automática e sem esforço.</p>

                    <div className="flex flex-wrap items-center gap-2 mt-4">
                        <Button onClick={() => setIsDialogOpen(true)} className="bg-green-500 px-18 py-6 rounded-[999px] text-black hover:bg-green-700">Conhecer</Button>
                        <Button className="px-13 py-6 rounded-[999px] border border-2 border-green-500 bg-green-500/10 hover:bg-green-300 border-green-300 " variant="outline">Entrar na Plataforma</Button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center p-8">
                    <img src="undraw_browsing_z5g5.svg" alt="um cara gostoso" className="rounded-lg w-100" />
                </div>

                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Criar Conta?</AlertDialogTitle>
                            <AlertDialogDescription>Ao Acessar essa pagina voce tera que criar uma conta</AlertDialogDescription>
                            <AlertDialogFooter>
                                <AlertDialogAction>Criar</AlertDialogAction>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>

            </div>

        </main>
    );
}