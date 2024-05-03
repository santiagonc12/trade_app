import Link from "next/link";


const links = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "Trade",
      route: "/trade",
    },
    {
      label: "Coins",
      route: "/coins",
    },
  ];

export default function Navigation(){
    return(
        <header>
          <nav className="h-auto w-full bg-slate-900 text-white">
            <ul className="flex">
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link rel="stylesheet" href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}