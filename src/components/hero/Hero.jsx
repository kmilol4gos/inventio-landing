export default function Hero() {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center bg-gradient-to-b from-white to-inventio-gray-light/30"
		>
			<div className="mx-auto px-4 py-20 flex flex-row items-center gap-12">
				<article className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
					<section className="space-y-8 animate-in">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-inventio-textoPrincipal leading-tight">
								Controla tu inventario y caja con{" "}
								<span className="text-inventio-naranja">un solo clic</span>
							</h1>
							<p className="text-xl md:text-2xl text-inventio-textoSecundario font-medium">
								Etiqueta, registra y factura desde la misma plataforma por{" "}
								<span className="text-inventio-naranja font-bold">
									CLP 30.000 al mes
								</span>
							</p>
						</div>
						<div className="space-y-4">
							<button
								onClick={() => scrollToSection("precios")}
								className="cursor-pointer bg-inventio-naranja hover:bg-inventio-naranja/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl"
							>
								Comienza a usar – CLP 30.000/mes
							</button>

							<div className="flex items-center space-x-2">
								<div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
									✅ Empresas de foodservice y ópticas ya confían en nosotros
								</div>
							</div>
						</div>
					</section>
					<section className="relative animate-in">
						<div className="relative">
							<div className="bg-inventio-blanco rounded-2xl shadow-2xl p-6 border border-inventio-grisClaro overflow-hidden">
								<img
									src="/mockup.png"
									alt="Inventio Dashboard"
									className="w-full md:min-w-[500px] md:max-w-[500px] h-auto rounded-lg"
								/>
							</div>
							{/* Floating Badge - Top Right */}
							<div className="absolute -top-4 -right-4 bg-inventio-naranja text-white px-4 py-2 rounded-full shadow-lg font-bold animate-bounce">
								+127% ventas
							</div>
							{/* Floating Badge - Bottom Left */}
							<div
								className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg font-bold animate-bounce"
								style={{ animationDelay: "0.3s" }}
							>
								-50% tiempo
							</div>
						</div>
					</section>
				</article>
			</div>
		</section>
	);
}
