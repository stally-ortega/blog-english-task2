/**
 * @fileoverview Defines the core data model for the travel blog sections.
 * Extended to support the editorial 'Storytelling' layout with expanded
 * factual narrative and explicit grammar-focus labels.
 *
 * @module models/trip-section
 */

/**
 * Represents a single section of the travel blog.
 *
 * @interface TripSection
 *
 * @example
 * const section: TripSection = {
 *   id: 'landing',
 *   title: 'The Journey',
 *   subtitle: 'How it all started',
 *   keywords: 'Cúcuta, acting competition, comfort zone, routine.',
 *   description: 'Short lead paragraph...',
 *   storyText: 'Extended factual narrative for the editorial block...',
 *   grammarFocus: 'Past Simple & Phrasal Verbs',
 *   imageUrl: 'assets/images/cucuta-landing.jpg',
 * };
 */
export interface TripSection {
  /**
   * Unique identifier for the section (e.g. 'landing', 'places').
   * Used as the HTML element id and NgFor tracking key.
   */
  readonly id: string;

  /**
   * Primary display title rendered as the editorial card heading (h2).
   */
  readonly title: string;

  /**
   * Optional subtitle — contextual sub-heading rendered below the title.
   */
  readonly subtitle: string;

  /**
   * Comma-separated thematic keywords rendered as pill chips.
   */
  readonly keywords: string;

  /**
   * Short lead paragraph (1–2 sentences). Retained from the original
   * data.json source of truth and used as the card's teaser text.
   */
  readonly description: string;

  /**
   * Extended narrative body (3–5 sentences). Contains factual details
   * about the SENA/UNAD student experience in Cúcuta and fulfils the
   * English B1 grammar requirements for the section.
   */
  readonly storyText: string;

  /**
   * Human-readable label identifying the B1 grammar structure
   * demonstrated in this section's text (e.g. 'Past Simple & Phrasal Verbs').
   * Displayed as a decorative badge on the card.
   */
  readonly grammarFocus: string;

  /**
   * Absolute URL of the illustrative photograph for the section.
   */
  readonly imageUrl: string;
}
