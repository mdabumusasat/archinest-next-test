import Link from 'next/link';

interface NavLinksProps {
    extraClassName?: string;
}

// Server Component - no hooks or browser APIs
const NavLinks: React.FC<NavLinksProps> = ({ extraClassName = "" }) => {
    return (
        <>
        <ul className={`navigation ${extraClassName}`}>
            <li className="current dropdown"><Link href="/">Home</Link>
                <ul>
                    <li><Link href="/">Home page 01</Link></li>
                    <li><Link href="/index-2">Home page 02</Link></li>
                    <li><Link href="/index-3">Home page 03</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Pages</Link>
                <ul>
                    <li><Link href="/page-about">About</Link></li>
                    <li className="dropdown"><Link href="#">Project</Link>
                    <ul>
                        <li><Link href="/page-project">Project List</Link></li>
                        <li><Link href="/page-project-details">Project Details</Link></li>
                    </ul>
                    </li>
                    <li className="dropdown"><Link href="#">Team</Link>
                    <ul>
                        <li><Link href="/page-team">Team List</Link></li>
                        <li><Link href="/page-team-details">Team Details</Link></li>
                    </ul>
                    </li>
                    <li><Link href="/page-testimonial">Testimonial</Link></li>
                    <li><Link href="/page-pricing">Pricing</Link></li>
                    <li><Link href="/page-faq">FAQ</Link></li>
                    <li><Link href="/page-404">Page 404</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Services</Link>
                <ul>
                    <li><Link href="/page-services">Services List</Link></li>
                    <li><Link href="/page-service-details">Service Details</Link></li>
                </ul>
            </li>
            <li className="dropdown"><Link href="#">Blog</Link>
                <ul>
                    <li><Link href="/news-grid">News Grid</Link></li>
                    <li><Link href="/news-details">News Details</Link></li>
                </ul>
            </li>
            <li><Link href="/page-contact">Contact</Link></li>
        </ul>
        </>
    );
};

export default NavLinks;
