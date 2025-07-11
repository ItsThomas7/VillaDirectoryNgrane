Villa Directory – Sicily Luxury Villas
This is a simple web application for browsing and inquiring about luxury villas in Sicily.

Features
Villa Directory Page:

List of villas showing name, area, short description, price per night, and photo.
Footer
Villa Detail Page:

Gallery of all villa photos.
Full description, amenities, unavailable dates.
Map preview using Google Maps embed.
Inquiry Form:

Includes fields for name, email, phone (optional), arrival/departure dates, and message.
Sends inquiry via EmailJS.
Shows confirmation after submission.
How to Run
Clone the repository:
git clone https://github.com/ItsThomas7/VillaDirectory.git cd VillaDirectory

Install dependencies:
npm install

Set up environment variables (for EmailJS if used):
touch .env.local

Set your own recipient email in src/components/InquiryForm.tsx:
to_email: 'your@email.com'

Start the development server:
npm run dev

Then open http://localhost:3000 in your browser.

Technologies Used
Next.js
Google Maps embed
React Datepicker (instead of Preline Datepicker)
EmailJS
Notes
Villa data is located in src/data/villas.json.
Villas without photos are shown without images.