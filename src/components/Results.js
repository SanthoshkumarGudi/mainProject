import { calculateInvestmentResults } from "./investment";

export default function Results({input}){
    calculateInvestmentResults(input);
    return(
        <p>
            Results...
        </p>
    )
}