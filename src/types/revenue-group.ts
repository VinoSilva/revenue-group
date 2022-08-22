import Rule from "@/types/rule";

type RevenueGroup = {
    name: string,
    description: string,
    isSpecial: boolean,
    rules: Rule[],
    id?: string
}

export default RevenueGroup;