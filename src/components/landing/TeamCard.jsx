const TeamCard = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen pt-10">
            <div
                className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] rounded-lg border border-border bg-card text-card-foreground transition-transform duration-300 ease-in-out transform hover:scale-10 hover:shadow-white cursor-pointer flex flex-col hover:scale-105"
                data-testid="team-card"
            >
                <div className="flex items-center gap-5 pt-2 text-center">
                    <img
                        src="/Foto-Jessica.jpg"
                        alt="Fotografia de Jessica"
                        className="w-20 h-20 p-2 rounded-full"
                    />
                    <div>
                        <h3 className="mt-2 mb-5 text-lg font-bold leading-tight">Jessica Arroyo Lebrón</h3>
                        <p className="text-sm text-muted-foreground">Junior Full Stack Developer</p>
                    </div>
                </div>
                <p className="p-4 text-sm text-muted-foreground dark:text-muted-foreground-dark">
                    🚀 Transformant idees en realitats digitals. 📚 Apassionada per aprendre tecnologies web i disseny
                </p>
            </div>
        </div>
    );
};

export default TeamCard
