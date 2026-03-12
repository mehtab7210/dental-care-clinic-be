import { useState, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaQuestionCircle,
  FaPhone,
  FaEnvelope,
  FaSearch,
  FaHeadset,
} from "react-icons/fa";
import {
  ChevronRight,
  Sparkles,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState({});
 const [filterOpen, setFilterOpen] = useState(false);
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      category: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "blue",
      questions: [
        {
          q: "What are your clinic hours?",
          a: "We are open Monday through Friday from 9:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays and major holidays.",
          keywords: ["hours", "time", "open", "close", "schedule"],
        },
        {
          q: "Do you accept insurance?",
          a: "Yes, we accept most major dental insurance plans including Delta Dental, Cigna, Aetna, MetLife, and UnitedHealthcare. Please contact our office to verify your specific coverage.",
          keywords: ["insurance", "cover", "payment", "plan", "delta", "cigna"],
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, credit cards (Visa, MasterCard, American Express, Discover), debit cards, and offer flexible payment plans through CareCredit for qualifying patients.",
          keywords: [
            "payment",
            "credit",
            "cash",
            "card",
            "finance",
            "carecredit",
          ],
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we offer flexible payment plans through CareCredit and in-house financing options for eligible patients. Contact our billing department for more details.",
          keywords: ["plan", "finance", "installment", "monthly", "carecredit"],
        },
      ],
    },
    {
      category: "Appointments",
      icon: <BookOpen className="w-5 h-5" />,
      color: "green",
      questions: [
        {
          q: "How do I schedule an appointment?",
          a: "You can schedule an appointment by calling our office at (555) 123-4567, using our online booking form on the website, or visiting us in person during business hours.",
          keywords: ["schedule", "book", "appointment", "reserve", "online"],
        },
        {
          q: "What is your cancellation policy?",
          a: "We request 24-hour notice for cancellations. Late cancellations (less than 24 hours) or no-shows may incur a fee of $50. Emergency situations are exempt.",
          keywords: [
            "cancel",
            "cancellation",
            "policy",
            "fee",
            "late",
            "no show",
          ],
        },
        {
          q: "How long is a typical appointment?",
          a: "Appointment times vary depending on the procedure. Regular check-ups and cleanings typically take 30-60 minutes. More complex procedures may require 60-90 minutes.",
          keywords: ["duration", "long", "time", "length", "appointment"],
        },
        {
          q: "Can I reschedule my appointment online?",
          a: "Yes, you can reschedule your appointment through our patient portal or by calling our office during business hours.",
          keywords: ["reschedule", "change", "modify", "online", "portal"],
        },
      ],
    },
    {
      category: "Treatments & Procedures",
      icon: <Sparkles className="w-5 h-5" />,
      color: "purple",
      questions: [
        {
          q: "How often should I visit the dentist?",
          a: "We recommend visiting the dentist every six months for regular check-ups and professional cleanings. However, some patients may need more frequent visits based on their oral health.",
          keywords: [
            "frequency",
            "often",
            "regular",
            "checkup",
            "cleaning",
            "visit",
          ],
        },
        {
          q: "Are your procedures painful?",
          a: "We use modern techniques and various anesthesia options to ensure your comfort. Most patients experience minimal to no discomfort during procedures. We also offer sedation options for anxious patients.",
          keywords: [
            "pain",
            "hurt",
            "comfort",
            "anesthesia",
            "sedation",
            "discomfort",
          ],
        },
        {
          q: "Do you offer emergency services?",
          a: "Yes, we provide 24/7 emergency dental services. For dental emergencies, please call our emergency line at (555) 987-6543 for immediate assistance.",
          keywords: ["emergency", "urgent", "after hours", "24/7", "immediate"],
        },
        {
          q: "What cosmetic dentistry services do you offer?",
          a: "We offer a range of cosmetic services including teeth whitening, veneers, bonding, and Invisalign clear aligners. Schedule a consultation to discuss your options.",
          keywords: [
            "cosmetic",
            "whitening",
            "veneers",
            "invisalign",
            "bonding",
            "beauty",
          ],
        },
      ],
    },
    {
      category: "Patients & Care",
      icon: <MessageCircle className="w-5 h-5" />,
      color: "orange",
      questions: [
        {
          q: "What should I bring to my first appointment?",
          a: "Please bring your insurance card, photo ID, any dental records from previous dentists, and a list of current medications. Arrive 15 minutes early to complete paperwork.",
          keywords: [
            "first",
            "new",
            "patient",
            "bring",
            "documents",
            "paperwork",
          ],
        },
        {
          q: "Do you treat children?",
          a: "Yes, we welcome patients of all ages. Our team is experienced in pediatric dentistry and creating a comfortable environment for children.",
          keywords: ["children", "kids", "pediatric", "family", "age"],
        },
        {
          q: "How can I improve my oral hygiene?",
          a: "We recommend brushing twice daily, flossing once daily, using fluoride toothpaste, limiting sugary foods, and visiting us regularly for check-ups and cleanings.",
          keywords: [
            "hygiene",
            "care",
            "brush",
            "floss",
            "clean",
            "prevention",
          ],
        },
      ],
    },
  ];

  // Get unique categories
  const categories = [
    {
      id: "all",
      name: "All Questions",
      icon: <HelpCircle className="w-4 h-4" />,
    },
    ...faqs.map((faq) => ({
      id: faq.category.toLowerCase().replace(/\s+/g, "-"),
      name: faq.category,
      icon: faq.icon,
      color: faq.color,
    })),
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqs
    .filter((category) => {
      if (
        activeCategory !== "all" &&
        category.category.toLowerCase().replace(/\s+/g, "-") !== activeCategory
      ) {
        return false;
      }

      if (searchTerm) {
        const categoryMatches = category.questions.some(
          (q) =>
            q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.keywords.some((k) =>
              k.toLowerCase().includes(searchTerm.toLowerCase()),
            ),
        );
        return categoryMatches;
      }

      return true;
    })
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          !searchTerm ||
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.keywords.some((k) =>
            k.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      ),
    }));

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stats = [
    { icon: <FaQuestionCircle />, value: "50+", label: "FAQs" },
    { icon: <FaHeadset />, value: "24/7", label: "Support" },
    { icon: <FaPhone />, value: "5 min", label: "Response Time" },
    { icon: <FaEnvelope />, value: "24 hrs", label: "Email Response" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <HelpCircle className="absolute top-20 left-10 text-white/20 w-16 h-16 animate-float-slow" />
          <MessageCircle className="absolute bottom-20 right-10 text-white/20 w-20 h-20 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative md:mt-0 mt-6">
          <div
            className="text-center max-w-4xl mx-auto"
            data-animate="fade-in-up"
          >
            <div className="inline-flex items-center bg-white/20 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/30 transition-colors">
              <HelpCircle className="mr-2 w-4 h-4" />
              FAQ
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Questions
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto px-4 leading-relaxed">
              Find answers to common questions about our services, appointments,
              and dental care.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 sm:mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full mb-2">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-xl sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
   <section className="py-6 sm:py-8 border-b bg-white sticky top-20 z-30 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

      {/* Search Bar */}
     <div className="relative w-full lg:flex-1 lg:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />

        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-2 sm:py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />

        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center justify-between w-full px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-semibold"
        >
          <span className="flex items-center">
            Filter FAQs
          </span>

          <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-full">
            {activeCategory === "all" ? "All" : activeCategory}
          </span>
        </button>
      </div>

      {/* Desktop Category Filters */}
      <div className="hidden lg:flex items-center space-x-2">
        {categories.map((category) => {
          const colors = {
            blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
            green: "bg-green-100 text-green-600 hover:bg-green-200",
            purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
            orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
          };

          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : category.color
                  ? colors[category.color]
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          );
        })}
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold text-blue-600">
          {filteredFAQs.reduce((acc, cat) => acc + cat.questions.length, 0)}
        </span>{" "}
        of {faqs.reduce((acc, cat) => acc + cat.questions.length, 0)} FAQs
        {searchTerm && ` for "${searchTerm}"`}
      </div>

    </div>

    {/* Mobile Filter Menu */}
    {filterOpen && (
      <div className="lg:hidden mt-4 grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setFilterOpen(false);
            }}
            className={`flex items-center justify-center px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold ${
              activeCategory === category.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
    )}

  </div>
</section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="mb-8 sm:mb-10"
                data-animate="fade-in-up"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <div
                    className={`p-2 sm:p-3 rounded-xl mr-3 ${
                      category.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : category.color === "green"
                          ? "bg-green-100 text-green-600"
                          : category.color === "purple"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {category.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                  <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {category.questions.length} questions
                  </span>
                </div>

                {/* Questions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-200 transition-all h-fit"
                      >
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className={`w-full flex justify-between items-center p-4 sm:p-6 text-left transition-all duration-300 ${
                            isOpen ? "bg-blue-50" : "bg-white hover:bg-gray-50"
                          }`}
                        >
                          <span className="font-semibold text-gray-800 text-sm sm:text-base pr-4">
                            {faq.q}
                          </span>
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                              isOpen
                                ? "bg-blue-600 text-white rotate-180"
                                : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {isOpen ? (
                              <FaMinus className="w-3 h-3" />
                            ) : (
                              <FaPlus className="w-3 h-3" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 animate-fade-in">
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              {faq.a}
                            </p>

                            {/* Helpful? Section */}
                            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                              <span className="text-xs text-gray-500">
                                Was this helpful?
                              </span>
                              <div className="flex space-x-2">
                                <button className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors">
                                  Yes
                                </button>
                                <button className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                                  No
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            // No Results State
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Questions Found
              </h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any questions matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("all");
                }}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          data-animate="fade-in-up"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-8 sm:p-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <FaHeadset className="w-8 h-8 text-blue-600" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our friendly team is
              here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="group inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: (555) 123-4567
              </a>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-6 py-2 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Form
              </Link>
            </div>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Or reach us through:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:info@dentalcare.com"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@dentalcare.com
                </a>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;