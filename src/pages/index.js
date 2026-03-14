import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/scripts-and-source/overview"
          >
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Scripts & Source Code",
    icon: "💻",
    description:
      "Browse and reuse custom Bash, PowerShell, Terraform, and Python scripts maintained as living documentation.",
    link: "/docs/scripts-and-source/overview",
  },
  {
    title: "Post-Mortems",
    icon: "📋",
    description:
      "Structured incident reviews and lessons learned to help the team avoid repeating the same mistakes.",
    link: "/docs/post-mortems/template",
  },
  {
    title: "Useful Links",
    icon: "🔗",
    description:
      "Curated reference links for Azure, AWS, Google Cloud, Terraform, Bash, PowerShell, CoreUtils, Linux, and community sites.",
    link: "/docs/useful-links/cloud-reference/azure",
  },
];

function FeatureCard({ title, icon, description, link }) {
  return (
    <div className={clsx("col col--4", styles.featureCard)}>
      <div className="card shadow--md">
        <div className="card__header">
          <h3>
            {icon} {title}
          </h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--sm" to={link}>
            View →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Infrastructure, Scripts, Post-Mortems and Reference Links"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <FeatureCard key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
