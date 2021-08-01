import { useContext, useMemo } from 'react'
import { MessageSourceContext, MessageSourceContextShape } from 'src/i18n/MessageSourceContext'

export interface MessageSourceApi {
  /**
   * Retrieves a text message.
   *
   * Example usage:
   * let name, lastName;
   * ...
   * const message = getMessage('message.key', [name, lastName]);
   *
   * @param key the key of the message.
   * @param params an optional parameters (param0, param1 ...).
   */
  getMessage: (key: string, params?: string[]) => string
}

/**
 * Checks whether the given String ends with the given suffix.
 *
 * @param str the string to test.
 * @param suffix the suffix to check.
 * @return {boolean}
 */
const endsWith = (str: string, suffix: string): boolean => str.indexOf(suffix, str.length - suffix.length) >= 0

/**
 * Normalizes the given keyPrefix to a defined format.
 *
 * @param keyPrefix the prefix to normalize.
 */
export const normalizeKeyPrefix = (keyPrefix: string): string =>
  keyPrefix.length > 0 && !endsWith(keyPrefix, '.') ? `${keyPrefix}.` : keyPrefix

/**
 * Retrieves a text message.
 *
 * @param textMessages a map which holds the translation pairs.
 * @param textKey the key of the message.
 * @param params optional placeholder parameters.
 * @returns {string} the message or the key itself.
 */
export function getMessageWithParams(
  textMessages: MessageSourceContextShape,
  textKey: string,
  params: string[] = [],
): string {
  const message = textMessages[textKey] || textKey
  return params.reduce((msg, current, index) => msg.replace(new RegExp(`\\{${index}\\}`, 'g'), current), message)
}

/**
 * A Hook which which provides the MessageSourceApi.
 *
 * @param keyPrefix an optional prefix which will be prepended to the lookup key.
 */
export function useMessageSource(keyPrefix?: string): MessageSourceApi {
  const textKeys = useContext(MessageSourceContext)
  return useMemo<MessageSourceApi>(() => {
    const keyPrefixToUse = normalizeKeyPrefix(keyPrefix || '')
    return {
      getMessage(key: string, params?: string[]) {
        const textKey = keyPrefixToUse + key
        const message = getMessageWithParams(textKeys, textKey, params)
        if (message === textKey && textKey !== '' && typeof textKey !== 'undefined') {
          if (import.meta.env.DEV) {
            console.warn(`You are missing the following key in your "translations.ts" file: [${textKey}]`)
          }
        }

        return message
      },
    }
  }, [textKeys, keyPrefix])
}
