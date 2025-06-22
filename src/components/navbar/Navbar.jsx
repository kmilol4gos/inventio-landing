import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const links = [
	{
		name: "Caracteristicas",
	},
	{
		name: "Precios",
	},
	{
		name: "Testimonios",
	},
	{
		name: "Contacto",
	},
];

export default function Navbar() {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header className="fixed top-0 z-50 bg-inventio-blanco/90 backdrop-blur-sm border-b border-inventio-grisClaro w-full ">
			<div className="mx-auto p-4">
				<div className="flex items-center justify-between">
					<section className="flex items-center space-x-2 ">
						<div className="w-8 h-8 bg-inventio-naranja rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-sm">I</span>
						</div>
						<span className="text-xl font-bold text-inventio-naranja">
							Inventio
						</span>
					</section>
					<nav className="hidden md:flex items-center gap-8">
						{links.map((link) => {
							return (
								<button
									key={link.name}
									onClick={() => {
										scrollToSection(link.name);
									}}
									className="cursor-pointer text-inventio-textoPrincipal hover:text-inventio-naranja transition-colors"
								>
									{link.name}
								</button>
							);
						})}
					</nav>

					<section className="hidden md:flex items-center gap-4">
						<div className="text-right">
							<button
								onClick={() => {
									scrollToSection("hero");
								}}
								className="cursor-pointer bg-inventio-naranja hover:bg-inventio-naranja/90 text-white py-2 px-6 rounded-md font-medium transition-all hover:scale-105"
							>
								Comienza a usar – CLP 30.000/mes
							</button>
							<div className="flex items-center justify-end mt-1">
								<span className="text-xs text-green-600 font-medium">
									✅ Sin contratos / cancela cuando quieras
								</span>
							</div>
						</div>
					</section>
					<section className="md:hidden">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<svg
									className="icon icon-tabler icons-tabler-outline icon-tabler-menu-4 text-inventio-gray-primary"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M7 6h10" />
									<path d="M4 12h16" />
									<path d="M7 12h13" />
									<path d="M7 18h10" />
								</svg>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="mt-4 pb-4 animate-accordion-down">
								<div className="flex flex-col gap-4">
									{links.map((link) => {
										return (
											<button
												onClick={() => {
													scrollToSection(link.name);
												}}
												key={link.name}
												className="cursor-pointer text-inventio-textoPrincipal hover:text-inventio-naranja transition-colors"
											>
												{link.name}
											</button>
										);
									})}
									<div className="pt-4 border-t border-inventio-gray-primary">
										<button
											className="w-full bg-inventio-naranja hover:bg-inventio-naranja/90 text-white py-3 px-6 rounded-md font-medium"
											onClick={() => {
												scrollToSection("hero");
											}}
										>
											Comienza a usar – CLP 30.000/mes
										</button>
										<p className="text-xs text-green-600 font-medium mt-2 text-center">
											✅ Sin contratos / cancela cuando quieras
										</p>
									</div>
								</div>
							</DropdownMenuContent>
						</DropdownMenu>
					</section>
				</div>
			</div>
		</header>
	);
}
