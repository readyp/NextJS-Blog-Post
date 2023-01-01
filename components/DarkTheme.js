export default function DarkTheme() {
    return (
        <style global jsx>
            {`
                :root {
                    --background-color: #000;
                    --text-color: #fff;
                    --link-color: rgb(182, 179, 7);
                }
            `}
        </style>
    )
}