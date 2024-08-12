"use client";

import { Badge } from "./badge";


interface Props {
    stacks: string[];
}

const ShowSkills = ({ stacks }: Props) => {
    return (
        <>
            {stacks.map((stack) => (
                <Badge
                    key={stack}
                    color="dark"
                    className="bg-neutral-600/70 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                >
                    <span className="font-medium text-white">
                        {stack}
                    </span>
                </Badge>
            ))}
        </>
    )
};

export default ShowSkills
