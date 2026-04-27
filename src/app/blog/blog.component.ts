/**
 * @fileoverview BlogComponent — smart container for the 'Sunsets & Stage'
 * Cúcuta travel blog. Owns the data layer; delegates all presentation to
 * the template (Single Responsibility Principle).
 *
 * Refactored v2: expanded editorial content with factual storytelling blocks,
 * B1 grammar focus labels, and subtitle fields per section.
 *
 * @module blog/blog.component
 */

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripSection } from '../models/trip-section.model';

/**
 * @class BlogComponent
 * @description
 * Smart container that holds the authoritative `TripSection[]` array and
 * exposes pure helper methods to the template. No DOM logic lives here
 * (Open/Closed Principle — add sections by appending, never modifying).
 *
 * `ChangeDetectionStrategy.OnPush` is intentional: `sections` is a deeply
 * frozen readonly array that never mutates after construction.
 *
 * @implements {OnInit}
 */
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {

  /**
   * Ordered list of trip sections. Each entry satisfies the extended
   * `TripSection` interface including `storyText`, `subtitle`, and
   * `grammarFocus` fields required by the editorial layout.
   *
   * Grammar coverage across the four sections:
   * - Section 1: Past Simple & Phrasal Verbs
   * - Section 2: 'Used to' & Modal Verbs (must / should)
   * - Section 3: First Conditional
   * - Section 4: Modal Verbs (must, have to, should)
   *
   * @type {readonly TripSection[]}
   */
  public readonly sections: readonly TripSection[] = [
    {
      id: 'landing',
      title: 'The Journey',
      subtitle: 'How a SENA artistic group set out for Cúcuta',
      keywords: 'Cúcuta, acting competition, SENA, artistic group, comfort zone.',
      description:
        'Have you ever felt that you need to get out of your comfort zone? Cúcuta is the perfect destination for a change of routine. I traveled there for an acting competition while I was finishing my degree, and it was a life-changing experience.',
      storyText:
        'We set out from Ocaña early in the morning, a group of students from different SENA programs who came together to form our artistic group. We packed our costumes, rehearsed our lines one last time on the bus, and talked about our nerves the whole journey. When we arrived in Cúcuta, the heat hit us immediately — it was nothing like the cool breeze we left behind in the mountains. I looked around at my teammates and realised that we all grew up that day. We signed up for the regional competition, checked in to our hotel, and got ready for the most unforgettable week of our lives.',
      grammarFocus: 'Past Simple & Phrasal Verbs',
      imageUrl: 'assets/images/cucuta-landing.jpg',
    },
    {
      id: 'places',
      title: 'The Infrastructure',
      subtitle: 'Ocaña\'s narrow streets vs. Cúcuta\'s grand avenues',
      keywords: 'Wide avenues, Avenida Libertadores, Diagonal Santander, theater, breeze.',
      description:
        'Cúcuta is famous for its infrastructure. I used to walk through narrow streets, but in Cúcuta, you must see the avenues because they are incredibly wide. You should also visit the local theaters where the competitions take place.',
      storyText:
        'I used to live in Ocaña, where most streets are only two lanes wide and you must always watch out for motorbikes squeezing past. In Cúcuta, everything is different. You must see Avenida Libertadores or Diagonal Santander — these are three to five lanes in each direction, lined with tall palms and commercial buildings. The environment is intensely hot, often reaching 38 °C during the day, but you should always walk in the shade and wait for the famous Brisa de Cúcuta — a strong evening wind that makes the heat completely bearable. You should also visit the local parks and the city\'s modern commercial plazas, which are a world away from anything I used to know back home.',
      grammarFocus: '\'Used to\' & Modal Verbs',
      imageUrl: 'assets/images/cucuta-places.jpg',
    },
    {
      id: 'activities',
      title: 'The Stage',
      subtitle: 'Performing at Teatro Zulima and the kindness of the locals',
      keywords: 'Teatro Zulima, perform, acting skills, adrenaline, sightseeing.',
      description:
        'You can perform in front of large audiences to lose your shyness. If you participate in cultural events, you will pick up many new acting skills. You have to get along with the locals because they are very kind.',
      storyText:
        'The competition took place at a local theater — a beautiful venue with velvet curtains and warm stage lights that made every performer feel like a star. If you step onto that stage, you will feel an energy that no classroom can ever teach you. If you connect with the audience, you will understand why theater exists. The Cúcuta locals cheered loudly for every group, not just their own, and that generosity taught us something important about sportsmanship. After the shows, if you have any free time, you will find that the city offers great street food, evening walks by the river, and small cultural festivals that give you a real taste of life on the Venezuelan border.',
      grammarFocus: 'First Conditional',
      imageUrl: 'assets/images/cucuta-activities.jpg',
    },
    {
      id: 'tips',
      title: 'Survival Guide',
      subtitle: 'The Brisa, the heat, and what to pack',
      keywords: 'Intense heat, light clothes, air conditioning, Brisa de Cúcuta, memories.',
      description:
        'You must be prepared for the heat; you have to wear light clothes to stay comfortable. You don\'t have to be afraid of talking to people because they are very friendly. If you visit Cúcuta, you will create great memories.',
      storyText:
        'You must book a hotel with air conditioning — this is not optional, it is essential for sleeping at night when temperatures stay above 28 °C. You have to pack light, breathable clothes: avoid dark colours that absorb the sun. You should always carry a small bottle of water and refill it throughout the day. You should never underestimate the midday sun; always look for shade between noon and 3 p.m. That said, you must stay long enough to experience the Brisa de Cúcuta — the famous late-afternoon wind that sweeps through the city and turns a brutally hot day into a genuinely pleasant evening. If you follow these tips, you will enjoy every single moment of your trip.',
      grammarFocus: 'Modal Verbs (must, have to, should)',
      imageUrl: 'assets/images/cucuta-tips.jpg',
    },
  ];

  /**
   * Track-by function for `*ngFor` — prevents full DOM re-renders
   * when the reference array identity does not change.
   *
   * @param {number} _index - The current loop index (unused, present for signature compliance).
   * @param {TripSection} section - The current iteration item.
   * @returns {string} The section's unique `id` string.
   */
  public readonly trackById = (_index: number, section: TripSection): string => section.id;

  /**
   * Angular lifecycle hook called once after component initialisation.
   * Reserved for future service-based data fetching without modifying
   * the core component logic (Dependency Inversion Principle).
   *
   * @returns {void}
   */
  public ngOnInit(): void {
    // Future: this.tripService.getSections().subscribe(data => this.sections = data);
  }

  /**
   * Parses a raw comma-separated `keywords` string into an ordered
   * array of trimmed keyword tokens for the chip list.
   *
   * @param {string} raw - Comma-separated keywords from the `TripSection` model.
   * @returns {string[]} Array of individual keyword strings, stripped of
   *   leading/trailing whitespace and empty entries.
   *
   * @example
   * this.parseKeywords('Cúcuta, acting competition, comfort zone');
   * // → ['Cúcuta', 'acting competition', 'comfort zone']
   */
  public parseKeywords(raw: string): string[] {
    return raw
      .split(',')
      .map((kw: string) => kw.trim())
      .filter((kw: string) => kw.length > 0);
  }

  /**
   * Maps a section `id` to the corresponding Font Awesome icon class.
   * Follows the Interface Segregation Principle — consumed only by the
   * template; has no side effects.
   *
   * @param {string} id - The `TripSection.id` value.
   * @returns {string} A Font Awesome icon class string (e.g. `'fa-solid fa-plane-departure'`).
   */
  public getSectionIcon(id: string): string {
    const icons: Record<string, string> = {
      landing:    'fa-solid fa-plane-departure',
      places:     'fa-solid fa-map-location-dot',
      activities: 'fa-solid fa-masks-theater',
      tips:       'fa-solid fa-lightbulb',
    };
    return icons[id] ?? 'fa-solid fa-globe';
  }

  /**
   * Returns the 1-based section index formatted as a zero-padded
   * two-digit string for the decorative number badge.
   *
   * @param {number} index - The zero-based `*ngFor` index.
   * @returns {string} Zero-padded index string (e.g. `'01'`, `'04'`).
   *
   * @example
   * this.formatIndex(0); // → '01'
   * this.formatIndex(3); // → '04'
   */
  public formatIndex(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }
}
