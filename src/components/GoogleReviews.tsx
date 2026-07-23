import { motion } from "framer-motion";
import { Star, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { SectionHeader, SectionShell } from "./layout/SectionShell";
import AnimatedSection from "./AnimatedSection";
import { googleReviews, googleBusinessProfileUrl, type GoogleReview } from "@/data/googleReviews";
import { trackSocialClick } from "@/lib/analytics";

export interface GoogleReviewsProps {
  customReviews?: GoogleReview[];
  showTitle?: boolean;
}

export const GoogleReviews = ({ customReviews = googleReviews, showTitle = true }: GoogleReviewsProps) => {
  const reviewsToDisplay = customReviews && customReviews.length > 0 ? customReviews : googleReviews;
  const averageRating = (reviewsToDisplay.reduce((acc, r) => acc + r.rating, 0) / reviewsToDisplay.length).toFixed(1);

  return (
    <SectionShell id="reviews">
      <AnimatedSection>
        {showTitle && (
          <SectionHeader
            index="06 — Verified Reviews"
            title="Google Reviews & verified client endorsements."
          />
        )}

        <div className="flex flex-col gap-8">
          {/* Header Badge & Rating Summary Bar */}
          <div className="p-6 rounded-lg border border-border bg-card/40 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-semibold text-foreground">Google Business Reviews</span>
                  <Badge variant="outline" className="font-mono text-[10px] text-emerald-500 border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3 mr-1 inline-block" /> 100% Verified
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-display font-bold text-sm text-foreground">{averageRating}</span>
                  <div className="flex items-center gap-0.5 text-amber-500" aria-label={`Rating ${averageRating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-body-sm text-muted-foreground">({reviewsToDisplay.length} Client Endorsements)</span>
                </div>
              </div>
            </div>

            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("google_reviews", googleBusinessProfileUrl)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-foreground text-background font-mono text-xs font-medium hover:bg-foreground/90 transition-colors shrink-0 interactive-focus"
            >
              Read all Google Reviews
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Reviews Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsToDisplay.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card className="p-6 h-full flex flex-col justify-between border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-colors duration-300 gap-6">
                  <div className="flex flex-col gap-4">
                    {/* Header with Star Rating & Google Verified Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" aria-hidden="true" />
                        Verified Review
                      </Badge>
                    </div>

                    {/* Review Text */}
                    <p className="text-body-sm text-foreground/90 leading-relaxed font-normal">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Reviewer Meta & Action Button */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={`Profile picture of ${item.name}`}
                        width="40"
                        height="40"
                        decoding="async"
                        loading="lazy"
                        className="w-10 h-10 rounded-full object-cover border border-border shrink-0"
                      />
                      <div className="flex flex-col min-w-0">
                        <span className="font-display font-medium text-sm text-foreground truncate">
                          {item.name}
                        </span>
                        <span className="text-[11px] font-mono text-muted-foreground truncate">
                          {item.date} {item.projectContext ? `• ${item.projectContext}` : ""}
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-primary hover:underline py-1.5 px-3 rounded border border-primary/20 bg-primary/[0.04] transition-colors interactive-focus"
                    >
                      <span>View on Google</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom Google Review CTA */}
          <div className="flex flex-col items-center justify-center text-center gap-3 pt-4">
            <p className="text-xs font-mono text-muted-foreground">
              Have you worked with Anupam Baral on software development or AI consulting?
            </p>
            <a
              href={googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" className="gap-2 font-mono text-xs">
                <svg className="w-4 h-4 mr-1 inline-block" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Read All Verified Google Reviews
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </Button>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </SectionShell>
  );
};

export default GoogleReviews;
