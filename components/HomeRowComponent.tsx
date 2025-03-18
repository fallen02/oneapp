import { finalMainPageContentDataTypes } from "~/providers/nfm/handlers"
import { Text } from "./ui/text"

export const HomeRowComponents = ({heading, data}: {heading: string, data: finalMainPageContentDataTypes[]}) => {
    return(
        <Text>{heading}</Text>
    )
}