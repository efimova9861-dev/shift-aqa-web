import {test, expect} from '@playwright/test'
import config from '../playwright.config'

const baseURL = config.use?.baseURL
if (!baseURL) {
    throw new Error('baseURL не задан в конфиге')
}

test('Проверка кнопки Отклонить', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('cookie-decline-button')).toHaveText('Отклонить')
    await page.getByTestId('cookie-decline-button').click()
    await expect(page.getByTestId('cookie-consent-banner')).toBeHidden()
    await expect.soft(page).toHaveTitle('Главная')
    await expect.soft(page).toHaveURL(baseURL)
    
})

test('Проверка кнопки Принять', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('cookie-accept-button')).toHaveText('Принять')
    await page.getByTestId('cookie-accept-button').click()
    await expect(page.getByTestId('cookie-consent-banner')).toBeHidden()
    await expect.soft(page).toHaveTitle('Главная')
    await expect.soft(page).toHaveURL(baseURL)
    
})

test('Проверка ссылки на политику конфиденциальности', async ({page}) => {
    await page.goto('')
    await expect.soft(page.getByTestId('cookie-consent-privacy-link')).toHaveText('политикой конфиденциальности')
    await page.getByTestId('cookie-consent-privacy-link').click()
    await expect.soft(page).toHaveTitle('Политика конфиденциальности | СладкийДом')
    await expect.soft(page).toHaveURL(`${baseURL}privacy`)
    
})
