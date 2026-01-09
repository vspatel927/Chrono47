// This is a mock implementation until real keys are provided
export const sendSMS = async (to: string, message: string) => {
    console.log("----------------------------------------");
    console.log("MOCK SMS SENDING VIA TELNYX");
    console.log(`TO: ${to}`);
    console.log(`MESSAGE: ${message}`);
    console.log("----------------------------------------");

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true, id: "mock-sms-id-" + Date.now() };
};
