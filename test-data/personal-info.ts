export type PersonalInfo = {
    firstName: string
    lastName: string
    email: string
};

const example: PersonalInfo = {
    firstName: "Donald",
    lastName: "Tramp",
    email: "donald.tramp@non-realgmail.com",
};

export const personalInfo = {
    example: example,
};