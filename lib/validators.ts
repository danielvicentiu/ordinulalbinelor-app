import { z } from "zod";

export const newsletterSignupSchema = z.object({
  email: z.string().email({ message: "Pergamentul nu pleacă spre o adresă pe care nu o înțelegem." }),
  prenume_parinte: z.string().min(2, { message: "Cum să te strige Starostele dacă nu-i spui prenumele?" }),
  copii: z
    .array(
      z.object({
        prenume: z.string().optional(),
        varsta: z.coerce.number().int().min(0, { message: "Vârsta o scriem între 0 și 18." }).max(18, { message: "Vârsta o scriem între 0 și 18." }).optional(),
      })
    )
    .max(4)
    .optional()
    .default([]),
  consimtamant_gdpr: z.literal(true, {
    errorMap: () => ({
      message: "Trebuie să apeși pe sigiliul de încuviințare ca să te primim în Ordin.",
    }),
  }),
});

export type NewsletterSignupInput = z.infer<typeof newsletterSignupSchema>;
