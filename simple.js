/**
 * IPC_Test_Config
 *
 * @category  Testing
 * @package  IPC.Test
 * @author  Squiz Pty Ltd <products@squiz.net>
 * @license  asdf
 * @link   asdf
 * @subpackage  asdf
 * @copyright  asdf
 */

function factorial(n)
{
    if (n === 0) {
        return 1;
    }
    
    return (n * factorial(n - 1));

}
