import { Fraunces, Great_Vibes } from "next/font/google"

export const prettyScriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const prettyStudioFont = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
})
