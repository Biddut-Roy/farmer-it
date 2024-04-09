import Link from "next/link";

export const metadata = {
    title : "about page",
    description: 'this is a about page'
}


const about = () => {
    return (
        <div>
            <h1>This is About page</h1>
            <Link href={"contact"}>
                <button className=" btn btn-primary">contact</button>
            </Link>
        </div>
    );
};

export default about;