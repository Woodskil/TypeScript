export type PersonalInfo = {
    firstName: string
    lastName: string
    email: string
};

const example: PersonalInfo = {
    firstName: "Donald",
    lastName: "Tramp",
    email: "donald.tramp@example.com",
};

export const personalInfo = {
    example: example,
};