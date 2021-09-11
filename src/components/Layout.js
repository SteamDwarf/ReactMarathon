import styles from './Layout.module.css';

const Layout = ({title, descr, urlBg, colorBg, children}) => {
    const inlineStyles = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg
    }

    return (
        <section className={styles.root} style={inlineStyles}>
            <div className={styles.wrapper}>
                <article>
                    <div className={styles.title}>
                        <h3>{title}</h3>
                        <span className={styles.separator}></span>
                    </div>
                    <div className={styles.desc + " " + styles.full}>
                        <p>{children}</p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;