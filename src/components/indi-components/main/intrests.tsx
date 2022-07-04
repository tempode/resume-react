import Title from "./title";
import Description from "./discription";

import { split } from "../../../utils/split";
import { interests } from "../../../utils/data";

const Intrests = () => {
    return (
        <div>
            <Title title="Intrests" />
            {split(interests).map((interest, index) => {
                return (
                    <div key={index}>
                        <Description description={interest} />
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Intrests;