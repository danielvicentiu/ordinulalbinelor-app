"use client";

import { useRouter } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import Link from "next/link";

import { newsletterSignupSchema, type NewsletterSignupInput } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

export default function NewsletterForm() {
  const router = useRouter();

  const form = useForm<NewsletterSignupInput>({
    resolver: zodResolver(newsletterSignupSchema),
    defaultValues: {
      email: "",
      prenume_parinte: "",
      copii: [],
      consimtamant_gdpr: undefined,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "copii",
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(data: NewsletterSignupInput) {
    try {
      const res = await fetch("/api/newsletter/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        toast.error(json.error || "Pergamentul s-a împotmolit. Încearcă peste un minut.");
        return;
      }

      if (json.message) {
        toast.success(json.message);
      } else {
        toast.success("Pergamentul pleacă spre tine. Verifică emailul.");
      }

      router.push("/multumesc");
    } catch {
      toast.error("Pergamentul s-a împotmolit. Încearcă peste un minut.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-ink font-inter">
                Pergament digital (email)
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="adresa@ta.ro"
                  autoComplete="email"
                  className="bg-white/80 border-gold/30 focus:border-gold"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Prenume parinte */}
        <FormField
          control={form.control}
          name="prenume_parinte"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-ink font-inter">
                Prenumele tău
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Prenumele tău"
                  autoComplete="given-name"
                  className="bg-white/80 border-gold/30 focus:border-gold"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Copii dinamici */}
        {fields.map((field, index) => (
          <div key={field.id} className="p-4 bg-white/60 rounded-md border border-gold/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-ink-soft font-inter">
                Copilul {index + 1}
              </span>
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-ink-soft/60 hover:text-red-500 transition-colors"
                aria-label={`Șterge copilul ${index + 1}`}
              >
                <Trash2 size={16} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name={`copii.${index}.prenume`}
                render={({ field: f }) => (
                  <FormItem>
                    <FormLabel className="text-ink font-inter text-xs">
                      Prenumele copilului
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Prenume"
                        className="bg-white/80 border-gold/30 focus:border-gold"
                        {...f}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`copii.${index}.varsta`}
                render={({ field: f }) => (
                  <FormItem>
                    <FormLabel className="text-ink font-inter text-xs">
                      Vârsta
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="7"
                        min={0}
                        max={18}
                        className="bg-white/80 border-gold/30 focus:border-gold"
                        {...f}
                        onChange={(e) =>
                          f.onChange(
                            e.target.value === "" ? undefined : Number(e.target.value)
                          )
                        }
                        value={f.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        ))}

        {/* Adaugă copil */}
        {fields.length < 4 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ prenume: "", varsta: undefined })}
            className="border-gold/40 text-ink-soft hover:border-gold hover:text-gold"
          >
            <Plus size={16} />
            Adaugă încă un copil
          </Button>
        )}

        {/* GDPR */}
        <FormField
          control={form.control}
          name="consimtamant_gdpr"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start gap-3 space-y-0 p-4 bg-white/40 rounded-md border border-gold/20">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-gold data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                />
              </FormControl>
              <FormLabel className="text-sm text-ink-soft font-inter leading-relaxed cursor-pointer">
                Sunt de acord ca datele mele să fie folosite pentru a primi scrisorile
                Ordinului. Detalii în{" "}
                <Link href="/confidentialitate" className="text-gold underline underline-offset-2">
                  Confidențialitate
                </Link>
                .
              </FormLabel>
            </FormItem>
          )}
        />
        <FormMessage>{form.formState.errors.consimtamant_gdpr?.message}</FormMessage>

        {/* Submit */}
        <div className="space-y-2">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gold hover:bg-gold-dark text-white font-cardo text-base tracking-wide h-12"
          >
            {isLoading ? "Pergamentul pleacă..." : "Trimite pergamentul"}
          </Button>
          <p className="text-xs text-ink-soft/70 text-center font-inter italic">
            Vom trimite o scrisoare de confirmare. Apasă sigiliul din ea pentru a finaliza.
          </p>
        </div>
      </form>
    </Form>
  );
}
