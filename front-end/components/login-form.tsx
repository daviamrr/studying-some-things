"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { AuthSchema, AuthService } from "@/services/auth";
import { useForm } from "react-hook-form";


export default function LoginForm() {
  const [viewPassword, setViewPassword] = useState("password");
  const authService = new AuthService()
  const { handleSubmit, register } = useForm({ defaultValues: { login: "", password: "" } })

  const onSubmit = ({ ...data }: AuthSchema) => {
    authService.auth(data)
  }

  return (
    <form className="flex flex-col gap-6 w-full max-w-90" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-2xl font-bold">Acessar minha conta</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="text">Usuário</Label>
          <Input id="text" type="text" placeholder="Usuário" {...register('login')} />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-4">
            <Input
              id="password"
              type={viewPassword}
              placeholder="*****"
              {...register('password')}
            />
            <div>
              {viewPassword === "password" ? (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setViewPassword("text")}
                >
                  <Eye size={16} />
                </Button>
              ) : (
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => setViewPassword("password")}
                >
                  <EyeClosed size={16} />
                </Button>
              )}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full cursor-pointer"
          variant="default"
        >
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Ainda não tem uma conta?{" "}
        <Link
          href="/register"
          className="underline underline-offset-4 text-verde-claro"
        >
          Cadastrar
        </Link>
      </div>
    </form>
  );
}
