/**
 * IPC_Test_Config
 *
 * @category  Testing
 * @package    IPC.Test
 * @subpackage Asdf
 * @author     Squiz Pty Ltd <products@squiz.net>
 * @license  asdf
 * @link   asdf
 * @copyright  1234-5678 Squiz Pty Ltd (ABN 77 084 670 600)
 */
function factorial(n)
{
    if (n === 0) {
        return 1;
    }

    return (n * factorial(n - 1));

}
