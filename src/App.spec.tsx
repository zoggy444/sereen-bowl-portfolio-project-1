import { test, expect } from '@playwright/experimental-ct-react';
import LoginForm from './components/pages/login/LoginPage';

test("@F01", async ({ mount, page }) => {
  // Comments indicate specifications for F01
  const component = await mount(<LoginForm />)
  page.on('dialog', async(dialog) => {
    // When I enter a name and submit, an alert pops up
    // saying "Hello <name>"
    expect(dialog.message()).toBe(`Hello ${userName}`);
    dialog.accept();
  });
  
  // Text "Welcome to our place !" and "Log in"
  await expect(component.locator("h1")).toContainText("Welcome to our place !");
  await expect(component.locator("h2")).toContainText("Log in");

  // Form
  const form = component.locator("form")
  await expect(form).toBeVisible()

  // Button "Get to your space"
  const button = form.locator("button")
  await expect(button).toHaveText("Get to your space");
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();

  // Placeholder "Enter your name..."
  const input = form.locator("input");
  await expect(input).toBeEnabled();
  await expect(input).toHaveAttribute("placeholder", "Enter your name...");

  // When I try submitting without first entering a name,
  // an error message appears under the field
  await expect(input).toHaveAttribute("required");

  // Empty form upon submission
  const userName = 'Bob'
  await input.fill(userName);
  await button.click();
  await expect(input).toBeEmpty();

});