import {
	Card,
	CardHeader,
	CardFooter,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const features = [
	{
		icon: "✓",
		title: "Plataforma web completa",
	},
	{
		icon: "✓",
		title: "Etiquetas ilimitadas con códigos de barras",
	},
	{
		icon: "✓",
		title: "Gestión de inventario en tiempo real",
	},
	{
		icon: "✓",
		title: "Control de caja y reportes automáticos",
	},
	{
		icon: "✓",
		title: "Soporte por correo electrónico",
	},
	{
		icon: "✓",
		title: "Actualizaciones incluidas",
	},
	{
		icon: "✓",
		title: "Respaldo seguro en la nube",
	},
	{
		icon: "✓",
		title: "Acceso desde cualquier dispositivo",
	},
];

export default function Pricing() {
	return (
		<section id="Precios" className="py-20 bg-white">
			<div className="mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-inventio-textoPrincipal mb-6">
						Un precio justo para{" "}
						<span className="text-inventio-naranja">tu negocio</span>
					</h2>
					<p className="text-xl text-inventio-textoSecundario max-w-3xl mx-auto">
						Sin sorpresas, sin contratos. Cancela cuando quieras.
					</p>
				</div>
				<article className="flex justify-center max-w-2xl mx-auto p-8">
					<Card className="p-0 overflow-hidden animate-in">
						<CardHeader className="text-center text-white bg-inventio-naranja pt-6 pb-4">
							<CardTitle className="text-2xl font-bold">
								Plan Inventio
							</CardTitle>
							<CardContent className="text-lg">
								<p className="font-bold">CLP 30.000 al mes</p>
							</CardContent>
							<CardDescription className="text-sm text-white/90">
								<p>Todo lo que necesitas para gestionar tu PYME</p>
							</CardDescription>
						</CardHeader>
						<CardContent className="p-6">
							<CardTitle className="text-xl font-bold mb-4">
								✨ Todo incluido
							</CardTitle>
							<ul className="list-disc pl-6">
								{features.map((feature, index) => (
									<li key={index} className="flex items-center gap-2">
										<span className="size-5 text-green-600 bg-green-100 flex items-center justify-center flex-shrink-0 rounded-full ">
											{feature.icon}
										</span>
										<span className="text-inventio-textoSecundario font-medium">
											{feature.title}
										</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter className="p-6">
							<div className="text-center">
								<button
									href="mailto:c.lagositurriaga@gmail.com"
									className="cursor-pointer w-full bg-inventio-naranja hover:bg-inventio-naranja/90 text-white py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] mb-4"
								>
									Comienza a usarla
								</button>
								<p className="text-sm text-inventio-textoSecundario">
									No se requiere tarjeta de crédito • Cancela cuando quieras
								</p>
							</div>
						</CardFooter>
					</Card>
				</article>
			</div>
		</section>
	);
}
