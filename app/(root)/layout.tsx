const Layout = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
    return <>
        <main>
            {children}
        </main>
    </>
}

export default Layout;