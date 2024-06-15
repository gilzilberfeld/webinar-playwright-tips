import { test, expect } from "@playwright/test";
import { getEmailTextBox, getErrorMessage, getFirstNameTextBox, getLastNameTextBox, getRegisterButton, getTermsCheckBox } from "./locators";

test("invalid inputs", async ({ page }) => {
  await page.goto("/register");
  await getTermsCheckBox(page).check();
  await expect(getRegisterButton(page)).toBeEnabled();
  await getRegisterButton(page).click();
  await expect(getErrorMessage(page)).toBeVisible();

  // just first name
  await getFirstNameTextBox(page).fill("a");
  await expect(getErrorMessage(page)).not.toBeVisible();
  await getLastNameTextBox(page).clear();
  await getEmailTextBox(page).clear();
  await getRegisterButton(page).click();
  await expect(getErrorMessage(page)).toBeVisible();

  //just last name
  await getFirstNameTextBox(page).clear();
  await getLastNameTextBox(page).fill("a");
  await expect(getErrorMessage(page)).not.toBeVisible();
  await getEmailTextBox(page).clear();
  await getRegisterButton(page).click();
  await expect(getErrorMessage(page)).toBeVisible();

  // just email
  await getFirstNameTextBox(page).clear();
  await getLastNameTextBox(page).clear();
  await getEmailTextBox(page).fill("a");
  await expect(getErrorMessage(page)).not.toBeVisible();
  await getRegisterButton(page).click();
  await expect(getErrorMessage(page)).toBeVisible();

  // wrong email
  await getFirstNameTextBox(page).fill("a");
  await expect(getErrorMessage(page)).not.toBeVisible();
  await getLastNameTextBox(page).fill("a");
  await getEmailTextBox(page).fill("a");
  await getRegisterButton(page).click();
  await expect(getErrorMessage(page)).toBeVisible();

});

