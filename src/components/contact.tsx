import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function ContactSection() {
    return (
        <section id="contact" className="py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h1 className="text-center text-4xl font-semibold lg:text-5xl">Contact Sales</h1>
                <p className="mt-4 text-center">Kami akan membantu Anda menemukan layanan dan harga yang sesuai untuk bisnis Anda.</p>

                <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
                    <div>
                        <h2 className="text-xl font-semibold">Langkah awal menuju solusi terbaik</h2>
                        <p className="mt-4 text-sm">Tim penjualan kami siap membantu memenuhi kebutuhan bisnis Anda melalui layanan kami.</p>
                    </div>

                    <form
                        action="#"
                        className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                        <div>
                            <Label htmlFor="name">Full name</Label>
                            <Input
                                type="text"
                                id="name"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="msg">Message</Label>
                            <Textarea
                                id="msg"
                                rows={3}
                            />
                        </div>

                        <Button><a href="/message-sent">Submit</a></Button>
                    </form>
                </Card>
            </div>
        </section>
    )
}
