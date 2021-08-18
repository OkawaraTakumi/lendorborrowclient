import { useParams } from "react-router";
import { SelectkeepLorB } from "../../slices/lorbSlice";
import { NegotiateTemplate } from "../../component/templates";

export const Lend = () => {
    const { id } = useParams<{id:string}>()
    return (
        <>
            {
                <NegotiateTemplate
                        id={id}
                        willSelect={SelectkeepLorB}
                        KeeponProps="LKeepOn"/>
            }
        </>
    );
};

export default Lend;