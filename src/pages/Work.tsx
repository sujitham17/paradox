import { useState } from "react";
import PageHero from "@/components/site/PageHero";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

type Cat = "Reels & Ads" | "Carousels" | "Posters";

type WorkItem = {
  title: string;
  cat: Cat;
  videoSrc?: string;
  imgSrc?: string;
  carouselSrcs?: string[];
  tag: string;
  aspect?: string;
};

const items: WorkItem[] = [
  { title: "Admission Ad", cat: "Reels & Ads", videoSrc: "/videos/admission-ad.mp4", tag: "Performance Ad", aspect: "aspect-[9/16]" },
  { title: "Aladdin Edit", cat: "Reels & Ads", videoSrc: "/videos/aladdin-edit.mp4", tag: "Creative Edit", aspect: "aspect-[9/16]" },
  { title: "Before vs After", cat: "Reels & Ads", videoSrc: "/videos/before-vs-after-reel-paradox.mp4", tag: "Case Study Reel", aspect: "aspect-[9/16]" },
  { title: "College Admissions", cat: "Reels & Ads", videoSrc: "/videos/coimbatore-college-admissions.mov", tag: "Targeted Campaign", aspect: "aspect-[9/16]" },
  { title: "Coolie Edit", cat: "Reels & Ads", videoSrc: "/videos/coolie-edit.mp4", tag: "Beat Sync", aspect: "aspect-[9/16]" },
  { title: "Edu Path Ad", cat: "Reels & Ads", videoSrc: "/videos/edu-path-ad.mp4", tag: "Lead Generation", aspect: "aspect-[9/16]" },
  { title: "Inopro Solutions", cat: "Reels & Ads", videoSrc: "/videos/inoprosolutions.mp4", tag: "Brand Video", aspect: "aspect-[9/16]" },
  { title: "Karpagam Ad", cat: "Reels & Ads", videoSrc: "/videos/karpagam-ad.mp4", tag: "Performance Marketing", aspect: "aspect-[9/16]" },
  { title: "Leo Beat Sync", cat: "Reels & Ads", videoSrc: "/videos/leo-beat-sync-edit.mov", tag: "Viral Edit", aspect: "aspect-[9/16]" },
  { title: "1 Sec Edit", cat: "Reels & Ads", videoSrc: "/videos/paradox-1sec-edit.mp4", tag: "Fast Paced", aspect: "aspect-[9/16]" },
  { title: "Agency Edit", cat: "Reels & Ads", videoSrc: "/videos/paradox-agency-edit.mp4", tag: "Brand Identity", aspect: "aspect-[9/16]" },
  { title: "Reality Check", cat: "Reels & Ads", videoSrc: "/videos/paradox-ford-vs-ferrari.mp4", tag: "Hard Truth", aspect: "aspect-[9/16]" },
  { title: "Ratio Edit", cat: "Reels & Ads", videoSrc: "/videos/ratio-edit.mp4", tag: "Format Adaptation", aspect: "aspect-[9/16]" },
  { title: "Typography Focus", cat: "Reels & Ads", videoSrc: "/videos/text-edit.mov", tag: "Typography", aspect: "aspect-[9/16]" },
  { title: "Admission Drive", cat: "Posters", imgSrc: "/posters/admission-poster.png", tag: "Campaign Poster" },
  { title: "Brown Aesthetic", cat: "Posters", imgSrc: "/posters/brown-poster.png", tag: "Brand Identity" },
  { title: "Breaking Bad Theme", cat: "Posters", imgSrc: "/posters/breaking-bad-styled-poster.png", tag: "Creative Direction" },
  { title: "Client Win", cat: "Posters", imgSrc: "/posters/client-win-poster.png", tag: "Case Study Graphic" },
  { title: "College Campaign", cat: "Posters", imgSrc: "/posters/college-poster.png", tag: "Marketing Collateral" },
  { title: "Meta Ad Creative", cat: "Posters", imgSrc: "/posters/meta-ad-poster.png", tag: "Performance Ad" },
  { title: "Client Win", cat: "Carousels", carouselSrcs: ["/carousels/client-win/1.png", "/carousels/client-win/2.png"], tag: "Case Study & ROAS", aspect: "aspect-[4/5]" },
  { title: "Future Step", cat: "Carousels", carouselSrcs: ["/carousels/future-step/1.jpg", "/carousels/future-step/2.jpg", "/carousels/future-step/3.jpg", "/carousels/future-step/4.jpg", "/carousels/future-step/5.jpg"], tag: "Brand Positioning", aspect: "aspect-[4/5]" },
  { title: "Growth", cat: "Carousels", carouselSrcs: ["/carousels/growth/1.png", "/carousels/growth/2.png", "/carousels/growth/3.png", "/carousels/growth/4.png", "/carousels/growth/5.png"], tag: "Growth Framework", aspect: "aspect-[4/5]" },
  { title: "Revenue", cat: "Carousels", carouselSrcs: ["/carousels/revenue/1.png", "/carousels/revenue/2.png", "/carousels/revenue/3.png", "/carousels/revenue/4.png", "/carousels/revenue/5.png", "/carousels/revenue/6.png"], tag: "Performance Strategy", aspect: "aspect-[4/5]" },
  { title: "Comic Series", cat: "Carousels", carouselSrcs: ["/carousels/comic-carousel/1.jpeg", "/carousels/comic-carousel/2.jpeg", "/carousels/comic-carousel/3.jpeg", "/carousels/comic-carousel/4.jpeg", "/carousels/comic-carousel/5.jpeg", "/carousels/comic-carousel/6.jpeg", "/carousels/comic-carousel/7.jpeg", "/carousels/comic-carousel/8.jpeg", "/carousels/comic-carousel/9.jpeg", "/carousels/comic-carousel/10.jpeg"], tag: "Storytelling", aspect: "aspect-[4/5]" },
];

const cats: Cat[] = ["Reels & Ads", "Carousels", "Posters"];

type ActiveMedia = 
  | { type: "video"; src: string }
  | { type: "image"; src: string }
  | { type: "carousel"; srcs: string[]; initialIdx: number };

const WorkCard = ({ it, onOpenMedia }: { it: WorkItem; onOpenMedia: (media: ActiveMedia) => void }) => {
  const [slideIdx, setSlideIdx] = useState(0);

  const handleClick = () => {
    if (it.videoSrc) onOpenMedia({ type: "video", src: it.videoSrc });
    else if (it.imgSrc) onOpenMedia({ type: "image", src: it.imgSrc });
    else if (it.carouselSrcs) onOpenMedia({ type: "carousel", srcs: it.carouselSrcs, initialIdx: slideIdx });
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (it.carouselSrcs) {
      setSlideIdx((prev) => (prev + 1) % it.carouselSrcs!.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (it.carouselSrcs) {
      setSlideIdx((prev) => (prev - 1 + it.carouselSrcs!.length) % it.carouselSrcs!.length);
    }
  };

  return (
    <figure
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${it.aspect || ''} group-hover:border-foreground transition-colors cursor-pointer shadow-md hover:shadow-lg`}
    >
      {it.videoSrc ? (
        <video
          src={it.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
      ) : it.carouselSrcs ? (
        <img 
          src={it.carouselSrcs[slideIdx]} 
          alt={it.title}
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500"
        />
      ) : (
        <img 
          src={it.imgSrc} 
          alt={it.title}
          className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-500 block"
        />
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-80" />
      
      {it.videoSrc && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
          <span className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-2xl border border-white/30">
            <Play className="h-6 w-6 fill-white ml-1" />
          </span>
        </div>
      )}

      {it.carouselSrcs && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-8 w-8 rounded-full bg-black/40 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur rounded-full px-3 py-1 text-[10px] font-mono text-white">
            {slideIdx + 1} / {it.carouselSrcs.length}
          </div>
        </>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="pill bg-white text-black border-transparent shadow-sm font-semibold">{it.cat}</span>
        </div>
        <div className="mt-auto pt-10">
          <p className="font-display text-2xl font-bold leading-tight text-white drop-shadow-sm">{it.title}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 drop-shadow-sm">
            {it.tag}
          </p>
        </div>
      </div>
    </figure>
  );
};

const Work = () => {
  const [filter, setFilter] = useState<Cat>("Reels & Ads");
  const [activeMedia, setActiveMedia] = useState<ActiveMedia | null>(null);
  const list = items.filter((i) => i.cat === filter);

  const handleModalNext = () => {
    if (activeMedia?.type === "carousel") {
      setActiveMedia({
        ...activeMedia,
        initialIdx: (activeMedia.initialIdx + 1) % activeMedia.srcs.length
      });
    }
  };

  const handleModalPrev = () => {
    if (activeMedia?.type === "carousel") {
      setActiveMedia({
        ...activeMedia,
        initialIdx: (activeMedia.initialIdx - 1 + activeMedia.srcs.length) % activeMedia.srcs.length
      });
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Work"
        title={
          <>
            Reels, ads & identity{" "}
            <span className="italic font-medium text-brand-grey">— in the wild.</span>
          </>
        }
        subtitle="A small slice of work shipped across performance ads, organic reels and branding."
      />

      <section className="container pt-12 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition border ${
                filter === c
                  ? "bg-foreground text-background border-foreground"
                  : "bg-background text-foreground border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-muted-foreground uppercase tracking-[0.18em]">
            {list.length} pieces
          </span>
        </div>
      </section>

      <section className="container pb-24 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {list.map((it, i) => (
            <WorkCard key={it.title + i} it={it} onOpenMedia={setActiveMedia} />
          ))}
        </div>
      </section>

      {/* Media Modal */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className={`relative w-full max-h-[90vh] ${activeMedia.type === 'video' ? 'max-w-[450px] aspect-[9/16]' : 'max-w-5xl'} bg-black rounded-3xl overflow-hidden shadow-2xl border border-border flex items-center justify-center`}>
            <button
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-50 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            
            {activeMedia.type === "carousel" && (
              <>
                <button 
                  onClick={handleModalPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={handleModalNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors border border-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur rounded-full px-4 py-1.5 text-xs font-mono text-white">
                  {activeMedia.initialIdx + 1} / {activeMedia.srcs.length}
                </div>
              </>
            )}

            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                autoPlay
                controls
                playsInline
                className="h-full w-full object-contain"
              />
            ) : activeMedia.type === "image" ? (
              <img 
                src={activeMedia.src}
                alt="Poster preview"
                className="w-full max-h-[90vh] object-contain"
              />
            ) : (
              <img 
                key={activeMedia.initialIdx}
                src={activeMedia.srcs[activeMedia.initialIdx]}
                alt="Carousel slide preview"
                className="w-full max-h-[90vh] object-contain animate-in slide-in-from-right-4 duration-300"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
