import BlueButton from "@/components/form/button/BlueButton";
import InputLabel from "@/components/form/input/InputLabel";

export default function page() {
    return(
        <>
            <form method="post" action="/api">
                <InputLabel type="text" name="conta" text="Conta"/>
                <InputLabel type="text" name="saldo" text="Saldo"/>
                <BlueButton type="submit" value="Cadastrar"/>
            </form>
        </>
    )
};
