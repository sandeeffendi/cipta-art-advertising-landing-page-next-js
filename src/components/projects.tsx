import Image from 'next/image'

export default function Projects() {
    return (
        <section id='project' className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Discover our projects</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <h1 className='text-muted-foreground font-bold text-left text-4xl'>Neonbox</h1>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptates animi asperiores minima modi. Magni exercitationem accusantium nesciunt cumque dignissimos?
                        </p>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at repellat quod sint debitis cum!</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur voluptatibus, cupiditate quae atque accusantium architecto modi vero officia vitae.</p>
                            </blockquote>
                        </div>
                    </div>
                    
                    <div className="relative space-y-4">
                        <h1 className='text-muted-foreground font-bold text-right text-4xl'>Neonbox</h1>
                        <p className="text-muted-foreground text-right">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque sed tempore nam debitis tenetur cumque qui doloribus molestiae numquam.
                        </p>
                        <p className="text-muted-foreground text-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore reiciendis alias unde dignissimos quas exercitationem!</p>

                        <div className="pt-6">
                            <blockquote className="border-r-4 pr-4">
                                <p className='text-right'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad exercitationem veniam officiis adipisci dolore obcaecati ipsum numquam autem dignissimos velit.</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
