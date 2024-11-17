import Navbar from "../../components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    return <>
        <Navbar />
        <main>
            {children}
        </main>
    </>
}

export default Layout;