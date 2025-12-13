

export let validateUtils = {
    validateField(key: string,
        value: string): string {
        const val = value.trim();
        switch (key) {
            case "name":
                return val.length < 3 ? "Please enter at least 3 characters." : "";

            case "mobile":
                return /^\d{10}$/.test(val)
                    ? ""
                    : "Enter a valid 10-digit mobile number.";

            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
                    ? ""
                    : "Enter a valid email address.";

            case "internship":
                return val ? "" : "Please select an internship.";

            case "driveLink":
                return /^https?:\/\/.+/i.test(val)
                    ? ""
                    : "Enter a valid URL starting with http or https.";

            case "message":
                return ""; // optional

            default:
                return "";
        }
    }
}