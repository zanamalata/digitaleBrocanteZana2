import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAuth = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/logout`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error();

      toast.success("Déconnecté avec succès");

      router.push("/sign-in");
      // TODO bug probablement ici 
      // => une fois connecté la page d'acceuil ne se rafraichit pas
      //  et le <useraccountnav/> ne se voit qu'apres refresh de la page d'acceuil
      router.refresh();
    } catch (err) {
      toast.error("Impossible de se déconnecter, veuillez réessayer.");
    }
  };

  return { signOut };
};
