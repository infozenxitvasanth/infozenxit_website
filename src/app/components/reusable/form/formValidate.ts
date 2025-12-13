// src/app/utils/validate_utils.ts

export interface FormValues {
    name: string;
    mobile: string;
    email: string;
    internship?: string;
    driveLink?: string;
    message: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;

export const formValidateField = {
    validateField(key: keyof FormValues, value?: string): string {
        const val = (value || "").trim();

        switch (key) {
            case "name":
                return val.length < 3
                    ? "Please enter at least 3 characters."
                    : "";

            case "mobile":
                return /^\d{10}$/.test(val)
                    ? ""
                    : "Enter a valid 10-digit mobile number.";

            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
                    ? ""
                    : "Enter a valid email address.";

            // case "internship":
               
            //     return value !== undefined && val === ""
            //         ? "Please select an internship."
            //         : "";

            case "driveLink":
             
                return value !== undefined && !/^https?:\/\/.+/i.test(val)
                    ? "Enter a valid URL starting with http or https."
                    : "";

            case "message":
                return ""; // optional

            default:
                return "";
        }
    },

    validateAll(values: FormValues): FormErrors {
        const errors: FormErrors = {};

        (Object.keys(values) as (keyof FormValues)[]).forEach((key) => {
            const msg = formValidateField.validateField(key, values[key]);
            if (msg) errors[key] = msg;
        });

        return errors;
    },
};
