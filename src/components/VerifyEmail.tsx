"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">
          Une erreur s&apos;est produite
        </h3>
        <p className="text-muted-foreground text-sm">
          Ce token n&apos;est pas valide ou a peut-être expiré. Veuillez
          réessayer
        </p>
      </div>
    );
  }

  // TODO change image email sent
  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image
            src="/hippo-email-sent.png"
            alt="digitalBrocante sent email"
            fill
          />
        </div>
        <h3 className="font-semibold text-2xl ">Vous êtes prêt.</h3>
        <p className="text-muted-foreground text-center mt-1">
          merci d&apos;avoir vérifié votre email
        </p>
        <Link
          href={"/sign-in"}
          className={buttonVariants({ className: "mt-4" })}
        >
          Se connecter
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Vérification...</h3>
        <p className="text-muted-foreground text-sm">
          ça ne prendra pas longtemps 😉
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
