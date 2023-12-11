import { Field } from "payload/types";
import { CustomSelectComponent } from "@/components/CustomSelectComponent";

export const customSelectField: Field = {
  name: "customSelectField",
  type: "text",
  admin: {
    components: {
      Field: CustomSelectComponent,
    },
  }
}