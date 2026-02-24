import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSubmitReservation } from '@/hooks/useQueries';
import { Loader2, CheckCircle2, Phone } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    requests: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const submitReservation = useSubmitReservation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitReservation.mutateAsync({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: BigInt(formData.guests),
        requests: formData.requests,
      });

      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '',
        requests: '',
      });

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Reservation submission failed:', error);
    }
  };

  const isFormValid =
    formData.name &&
    formData.phone &&
    formData.email &&
    formData.date &&
    formData.time &&
    formData.guests;

  return (
    <section id="reservation" className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Reserve Your <span className="text-gold">Table</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Book your dining experience at The Glass Box. We look forward to serving you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info Card */}
          <Card className="border-gold/20 bg-charcoal/50 backdrop-blur-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold">Contact Us</CardTitle>
              <CardDescription className="text-white/70">
                Prefer to call? We're here to help
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-semibold text-white">Phone</h3>
                <a
                  href="tel:09065596966"
                  className="flex items-center gap-2 text-gold transition-colors hover:text-gold/80"
                >
                  <Phone className="h-4 w-4" />
                  090655 96966
                </a>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Hours</h3>
                <p className="text-white/80">Open Daily</p>
                <p className="text-white/80">Closes at 11 PM</p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Location</h3>
                <p className="text-sm text-white/80">
                  B/77 P.C. Colony Road
                  <br />
                  Kankarbagh, Patna
                  <br />
                  Bihar 800020
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-white">Wait Time</h3>
                <p className="text-white/80">Up to 15 minutes during busy hours</p>
              </div>
            </CardContent>
          </Card>

          {/* Reservation Form Card */}
          <Card className="border-gold/20 bg-charcoal/50 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-gold">Reservation Details</CardTitle>
              <CardDescription className="text-white/70">
                Fill in your details to reserve a table
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="mb-4 h-16 w-16 text-gold" />
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-white">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-white/80">
                    Thank you for choosing The Glass Box. We'll see you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-white">
                        Date *
                      </Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-white">
                        Time *
                      </Label>
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="text-white">
                        Guests *
                      </Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requests" className="text-white">
                      Special Requests
                    </Label>
                    <Textarea
                      id="requests"
                      name="requests"
                      value={formData.requests}
                      onChange={handleChange}
                      className="min-h-24 border-gold/30 bg-black/40 text-white placeholder:text-white/40 focus:border-gold"
                      placeholder="Any dietary restrictions or special occasions?"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={!isFormValid || submitReservation.isPending}
                    className="w-full bg-gold py-6 text-lg font-semibold text-black hover:bg-gold/90 disabled:opacity-50"
                  >
                    {submitReservation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Confirm Reservation'
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
