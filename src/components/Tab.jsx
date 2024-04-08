export default function Tab({children,buttons,Containerbutton})
{
    return (
        <>
        <Containerbutton>{buttons}</Containerbutton>
        {children}
        </>
    )
}