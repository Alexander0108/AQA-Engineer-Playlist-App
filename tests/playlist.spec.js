import { test, expect } from '@playwright/test';

// Допоміжна функція для конвертації "mm:ss" у секунди
function convertTimeToSeconds(timeString) {
  const [minutes, seconds] = timeString.split(':').map(Number);
  return minutes * 60 + seconds;
}

test.describe('Playlist App - Functional Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // TECHNIQUE: Equivalence Partitioning (Valid Class)
  test('Search functionality filters tracks', async ({ page }) => {
    const searchInput = page.getByLabel('Search');
    await searchInput.fill('Summer');

    await expect(page.locator('#tracklist')).toContainText('Summer Breeze');
    await expect(page.locator('#tracklist')).not.toContainText('Winter Winds');
  });

  // Перевірка, коли результатів немає
  // TECHNIQUE: Boundary Value Analysis (Negative Boundary)
  test('Search shows no results for non-existing track', async ({ page }) => {
    const searchInput = page.getByLabel('Search');
    await searchInput.fill('Non-existing music');

    // Перевіряємо, що в списку треків 0 елементів
    const tracks = page.locator('#tracklist .MuiGrid-container');
    await expect(tracks).toHaveCount(0);
  });

  test('Add track and verify total duration', async ({ page }) => {
    const trackName = 'Summer Breeze';
    const trackDurationText = '03:35';

    const trackRow = page
      .locator('.MuiGrid-container')
      .filter({ hasText: trackName });

    await trackRow.getByRole('button', { name: '+' }).click();

    const playlist = page.locator('#playlist');
    await expect(playlist).toContainText(trackName);

    const expectedSeconds = convertTimeToSeconds(trackDurationText);
    const durationDisplay = page.locator('#playlist-duration');
    await expect(durationDisplay).toContainText(expectedSeconds.toString());
  });
});
