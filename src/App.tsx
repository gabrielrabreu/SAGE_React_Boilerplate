import React from "react";
import { BellIcon, MailIcon, MenuIcon, UserIcon } from "lucide-react";

import styles from "./App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles["app"]}>
      <header className={styles["navbar"]}>
        <button className={styles["button-icon"]}>
          <MenuIcon className={styles["icon"]} />
        </button>
        <button className={styles["brand"]}>
          <p>Sage</p>
        </button>
        <ul className={styles["navbar-nav"]}>
          <li>
            <button className={styles["button-icon"]}>
              <BellIcon className={styles["icon"]} />
            </button>
          </li>
          <li>
            <button className={styles["button-icon"]}>
              <MailIcon className={styles["icon"]} />
            </button>
          </li>
          <li>
            <button className={styles["button-icon"]}>
              <UserIcon className={styles["icon"]} />
            </button>
          </li>
        </ul>
      </header>
      <main className={styles["main"]}>
        <div className={styles["page-title"]}>
          <h1>Form Elements</h1>
          <nav>
            <ol className={styles["breadcrumb"]}>
              <li className={styles["breadcrumb-item"]}>
                <a>Home</a>
              </li>
              <li className={styles["breadcrumb-item"]}>Forms</li>
              <li className={styles["breadcrumb-item"]}>Elements</li>
            </ol>
          </nav>
        </div>
        <section className={styles["section"]}>
          <div className={styles["row"]}>
            <div className={styles["col-lg-6"]}>
              <div className={styles["card"]}>
                <div className={styles["card-body"]}>
                  <h5 className={styles["card-title"]}>
                    General Form Elements
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
